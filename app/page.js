"use client";
import { useState, useEffect } from "react";
import { db } from "@/libs/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "prueba");
        const doc1Ref = doc(collectionRef, "dato1");
        const doc2Ref = doc(collectionRef, "dato2");

        const [doc1Snap, doc2Snap] = await Promise.all([
          getDoc(doc1Ref),
          getDoc(doc2Ref),
        ]);

        const fetchedData = [];
        if (doc1Snap.exists()) {
          fetchedData.push({ id: doc1Snap.id, ...doc1Snap.data() });
        }
        if (doc2Snap.exists()) {
          fetchedData.push({ id: doc2Snap.id, ...doc2Snap.data() });
        }
        setData(fetchedData);
      } catch (err) {
        setError("Error al cargar los datos.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Inicio del proyecto de Diego Cardona</h1>
      <select name="select">
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}