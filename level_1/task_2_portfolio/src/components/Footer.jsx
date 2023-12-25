import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-red-200 py-4">
    <div className="container mx-auto">
      <div className="flex flex-col justify-between items-center gap-2">
        <Socials/>
        <div className="text-muted-foreground">
         2023&copy; Copyright | CODSOFT.
      </div>
      </div>
      
    </div>
  </footer>
  )
}

export default Footer;