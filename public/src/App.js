// import syntax dari file JS lain
import index from "./index.js"

// MEMBUAT SEBUAH FUNTION RENDER
const App = ()=>{
    document.getElementById("root").innerHTML = index()
}

// MEMJALANKAN FUNCTION RENDERNYA
App()

// export App() agar dapoat digunakan di file JS lainnnya
export default App




