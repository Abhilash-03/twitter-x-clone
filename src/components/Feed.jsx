import { app } from "@/firebase"
import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore"
import Post from "./Post";

const Feed = async() => {
    const db = getFirestore(app);
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    let data = [];

    querySnapshot.forEach((item) => {
        data.push({id: item.id, ...item.data()})
    })
    
  return (
    <div>
      {
        data.map((post) => (
            <Post key={post.id} post={post} id={post.id} />
        ))
      }
    </div>
  )
}

export default Feed
