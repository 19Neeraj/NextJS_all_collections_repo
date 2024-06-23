// uploadFile.js

import { ref, uploadBytes, getDownloadURL,getStorage } from "firebase/storage";
import { app } from "./connectFirebase";

async function uploadFile(selectedFile) {
  try {
    const storage = getStorage(app);
    console.log("step1");
    const storageRef = ref(storage, "uploads/"+ selectedFile.name);
    console.log("step2");
    await uploadBytes(storageRef, selectedFile);
    console.log("step3");

    const downloadURL = await getDownloadURL(storageRef);
    console.log("step4");

    console.log("File uploaded successfully! Download URL:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

export default uploadFile;
