import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { db } from '../../../config/firebaseconfig';
import { useModal } from '../../../context/ModalContext';

interface AttendanceRecord {
  id: string;
  eventName: string;
  email: string;
  fullName: string;
  age: string;
  address: string;
  createdAt?: { toDate?: () => Date };
  timestamp?: string;
}

const AdminAttendancePage: React.FC = () => {
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const { showModal } = useModal();

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'attendance'));
        const records = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as AttendanceRecord[];
        setAttendanceRecords(records);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
        showModal('Error', 'Failed to fetch attendance records.');
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceRecords();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRaffle = async () => {
    if (attendanceRecords.length === 0) {
      showModal('Raffle Error', 'No records available for the raffle.');
      return;
    }

    const randomIndex = Math.floor(Math.random() * attendanceRecords.length);
    const winner = attendanceRecords[randomIndex];

    try {
      await addDoc(collection(db, 'raffleWinners'), {
        fullName: winner.fullName,
        eventName: winner.eventName,
        timestamp: new Date().toISOString(),
      });

      await deleteDoc(doc(db, 'attendance', winner.id));

      setAttendanceRecords(prevRecords => prevRecords.filter(record => record.id !== winner.id));
      showModal('🎉 Raffle Winner! 🎉', `Congratulations to ${winner.fullName}!`);
    } catch (error) {
      console.error('Error during the raffle process:', error);
      showModal('Raffle Error', 'Failed to complete the raffle process.');
    }
  };

  const formatTimestamp = (record: AttendanceRecord) => {
    if (record.createdAt?.toDate) {
      return record.createdAt.toDate().toLocaleString();
    }

    return record.timestamp ? new Date(record.timestamp).toLocaleString() : 'Not available';
  };

  if (loading) {
    return <p>Loading attendance records...</p>;
  }

  return (
    <div className="p-3 sm:p-6">
      <h2 className="mb-4 text-2xl font-semibold">User Attendance Records</h2>
      {attendanceRecords.length > 0 ? (
        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200 bg-white">
          <table className="w-full min-w-0 border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-gray-200 px-3 py-2 text-sm font-semibold sm:px-4">Event Name</th>
                <th className="border-b border-gray-200 px-3 py-2 text-sm font-semibold sm:px-4">Email</th>
                <th className="border-b border-gray-200 px-3 py-2 text-sm font-semibold sm:px-4">Full Name</th>
                <th className="border-b border-gray-200 px-3 py-2 text-sm font-semibold sm:px-4">Age</th>
                <th className="border-b border-gray-200 px-3 py-2 text-sm font-semibold sm:px-4">Address</th>
                <th className="border-b border-gray-200 px-3 py-2 text-sm font-semibold sm:px-4">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map(record => (
                <tr key={record.id}>
                  <td className="border-b border-gray-200 px-3 py-2 text-sm sm:px-4">{record.eventName}</td>
                  <td className="border-b border-gray-200 px-3 py-2 text-sm sm:px-4">{record.email}</td>
                  <td className="border-b border-gray-200 px-3 py-2 text-sm sm:px-4">{record.fullName}</td>
                  <td className="border-b border-gray-200 px-3 py-2 text-sm sm:px-4">{record.age}</td>
                  <td className="border-b border-gray-200 px-3 py-2 text-sm sm:px-4">{record.address}</td>
                  <td className="border-b border-gray-200 px-3 py-2 text-sm sm:px-4">{formatTimestamp(record)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No attendance records found.</p>
      )}

      <div className="my-6">
        <button
          onClick={handleRaffle}
          className="rounded-lg bg-green-500 px-4 py-2 text-white transition duration-300 hover:bg-green-600"
        >
          Raffle a Winner
        </button>
      </div>
    </div>
  );
};

export default AdminAttendancePage;
