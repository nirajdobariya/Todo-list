

export const Add = (data) => {
  return (
       {
           type: 'ADDTODO',
           payload: {
            id: new Date().getTime().toString(),
            data: data
        }
       }
  )
}


export const Remove = () => {
  // {console.log("aaaaa",Remove)}
  return (
    {
      type: 'RMVTODO',
    }
    )
}

export const Delete = (id) => {
  // console.log("id",id)
  return (
       {
           type: 'DLTTODO',
          payload: id
       }
  )
}


