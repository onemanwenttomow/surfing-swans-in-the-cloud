export default function HomePage() {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log("data: ", data);
  }

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" accept="image/*" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
