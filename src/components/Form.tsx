import { useState } from "react"


interface InputFiled {
  name: string;
  age: string;
}

type InputFieldKeys = keyof InputFiled

export default function Form() {
  const [inputFields, setInputFields] = useState<InputFiled[]>([{ name: '', age: '' }])



  const handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    let fields = [...inputFields]
    inputFields[i][e.target.name as InputFieldKeys] = e.target.value
    setInputFields(fields)
  }

  const handleAdd = () => {
    setInputFields(prevFields => [...prevFields, { name: '', age: '' }])
  }

  const handleDelete = (i: number) => {
    let newFileds = [...inputFields.slice(0, i), ...inputFields.slice(i + 1)]
    setInputFields(newFileds)
  }




  return (
    <div className="text-4xl font-bold">
      Welcome To Interacitve Projects!!
      {inputFields.map((inputField, i) => {
        return (
          <div key={i} className="text-xl">
            <input onChange={(e) => handleChange(i, e)} className="border" placeholder="name" name="name" value={inputField.name} />
            <input onChange={(e) => handleChange(i, e)} className="border" placeholder="age" name="age" value={inputField.age} />
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>)
      })}
      <button onClick={handleAdd}>Add</button>

    </div>)
}