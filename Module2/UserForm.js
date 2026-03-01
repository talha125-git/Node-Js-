function UserForm(req, resp) {
    resp.write(`
          <form action="/submit" method="post">
            <input type="text" name="username" placeholder="Enter name">
            <input type="email" name="email" placeholder="Enter email">
            <button type="submit">Submit</button>
        </form>
        `);
}

module.exports = UserForm;