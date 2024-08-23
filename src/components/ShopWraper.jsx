


export default function ShopWraper({Children}) {
  return (
    <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
      {Children}
    </div>
  )
}
