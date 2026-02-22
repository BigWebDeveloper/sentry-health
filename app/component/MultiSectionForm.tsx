const personalFields = [
  { name: "firstname", placeholder: "First name", type: "text" },
  { name: "lastname", placeholder: "Last name", type: "text" },
  { name: "location", placeholder: "Location", type: "text" },
  { name: "age", placeholder: "Age", type: "number" },
  { name: "occupation", placeholder: "Occupation", type: "text" },
  { name: "email", placeholder: "Email", type: "email" },
  { name: "password", placeholder: "Password", type: "password" },
];

const cardFields = [
  { name: "cardNumber", placeholder: "Card Number", type: "text" },
  { name: "cardName", placeholder: "Name on Card", type: "text" },
  { name: "expiryDate", placeholder: "Expiry Date", type: "text" },
  { name: "ccv", placeholder: "CCV", type: "text" },
];

export default function Page() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg space-y-6">
        <h1 className="text-2xl font-bold">User Information</h1>

        {/* PERSONAL INFO */}
        <div className="space-y-4">
          {personalFields.map((field) => (
            <input
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />
          ))}
        </div>

        <h2 className="text-xl font-semibold pt-4 border-t">Card Details</h2>

        {/* CARD INFO */}
        <div className="space-y-4">
          {cardFields.map((field) => (
            <input
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
