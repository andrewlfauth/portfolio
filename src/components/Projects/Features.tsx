function Features({ features }: { features: string[] }) {
  return (
    <ul className='text-sm md:text-lg text-mat-red catppuccin:text-cat-green nightowl:text-nightowl-orange font-redhat lg:pl-2 space-y-2 text-center lg:text-left'>
      {features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
  )
}

export default Features
