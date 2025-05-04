export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Scarborough Shift</h1>
          <ul className="flex gap-4">
            <li><a href="#" className="hover:underline">Clinics</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  