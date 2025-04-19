import './App.css'
import conf from './conf/conf'

function App() {
 
  console.log(conf.appwriteUrl );
  console.log(conf.appwriteProject );
  console.log(conf.appwriteDatabase );
  console.log(conf.appwriteCollection );
  

  return (
    <>

 <h1 className=' text-3xl bg-black text-white  py-2  px-auto border-3 border-gray-600 shadow-lg justify-center flex'>appwrite Megablog project </h1>
    </>
  )
}

export default App
