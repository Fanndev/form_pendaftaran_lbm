// src/app/page.js
import Form from '../app/Components/form-register';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="container mx-auto p-4">
        <Form />
      </div>
    </div>
  );
}