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
  timestamp: string;
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

  if (loading) {
    return <p>Loading attendance records...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Attendance Records</h2>
      {attendanceRecords.length > 0 ? (
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Event Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Full Name</th>
                <th className="py-2 px-4 border-b">Age</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map(record => (
                <tr key={record.id}>
                  <td className="py-2 px-4 border-b">{record.eventName}</td>
                  <td className="py-2 px-4 border-b">{record.email}</td>
                  <td className="py-2 px-4 border-b">{record.fullName}</td>
                  <td className="py-2 px-4 border-b">{record.age}</td>
                  <td className="py-2 px-4 border-b">{record.address}</td>
                  <td className="py-2 px-4 border-b">{new Date(record.timestamp).toLocaleString()}</td>
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
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Raffle a Winner
        </button>
      </div>
    </div>
  );
};

export default AdminAttendancePage;
