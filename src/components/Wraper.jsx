
export default function Wraper({ Children }) {
  return (
    <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      {Children}
    </div>
  )
}
