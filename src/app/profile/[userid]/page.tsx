import React from 'react'

interface ParamsData {
    params:any
}
const page: React.FC<ParamsData> = ({params}) => {
  return (
    <div>page {params.userid}</div>
  )
}

export default page