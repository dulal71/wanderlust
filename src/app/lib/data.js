export const getData = async()=>{
    const res = await fetch('http://localhost:5000/destinations')
    const data = await res.json()
    return data;
}

export const getDataById = async(id)=>{
    console.log(id);
const res = await fetch(`http://localhost:5000/destinations/${id}`)
const data = await res.json()
return data
}