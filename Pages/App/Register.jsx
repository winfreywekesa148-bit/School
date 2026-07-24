function StudentForm() {
  return (
    <div>
      <h2>Student Registration</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" required />

        <label htmlFor="course">Course:</label>
        <select id="course" name="course" required>
          <option value="">Select a course</option>
          <option value="painting">Painting Classes🖌️ 🎨</option>
          <option value="sculpture">Sculpture Workshops🗿 🛠️</option>
          <option value="seminars">Drawing Seminars✏️ 🖍️</option>
          <option value="history">Art History Lectures🏛️ 📚</option>
          <option value="instrumentals">Instrumentals🎵 🎹</option>
          <option value="music">Music Classes🎼 🎵</option>
          <option value="acting">Acting Classes🎭 🎬</option>
          <option value="theater">Theater Classes🎭 🎟️</option>
          <option value="dance">Dance Classes💃 🕺</option>
          <option value="sketch">Sketching Classes✏️ ✍️</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentForm;
