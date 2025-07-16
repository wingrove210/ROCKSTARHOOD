interface Item {
    name: string;
    images: string[];
    color: string;
    description: string;
    sizes: string[];
    price: number;
    discauntPrice: number;
}



export default function Item() {
  return (
    <div className='h-30'>
       <img src="" alt="image" />
    </div>
  )
}
