import { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../firebase/clientApp";
import { setDoc, doc } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const invoiceData = req.body;
      await setDoc(
        doc(database, "invoices", invoiceData.invoiceId),
        invoiceData
      );
      res.status(200).json({ message: "success" });
    } catch (error) {
      console.log(error);
    }
  }
}
