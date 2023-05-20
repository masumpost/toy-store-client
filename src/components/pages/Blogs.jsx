const Blogs = () => {
  return (
    <div>
      <h4 className="text-5xl font-bold text-center my-5">
        Those are awesome valuable topics:
      </h4>

      <div className="shadow-xl p-4 my-4">
        <h3 className="text-2xl font-semibold my-4">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h3>
        <p>
          Answer: Access tokens are credentials that grant a client access to
          protected resources on a server. Refresh tokens are long-lived
          credentials used to obtain new access tokens when the current ones
          expire. Access tokens are included in requests to the server to verify
          authorization. If an access token expires, the client can use a
          refresh token to obtain a new access token without reauthentication.
          On the client-side, access and refresh tokens should be stored
          securely. This can be done using operating system-provided mechanisms
          like Keychain or Keystore on mobile platforms, or secure browser
          storage options like localStorage or sessionStorage in web
          applications. Following platform-specific best practices ensures the
          tokens are protected from unauthorized access.
        </p>
      </div>

      <div className="shadow-xl p-4 my-4">
        <h3 className="text-2xl font-semibold my-4">
          2. Compare SQL and NoSQL databases?
        </h3>
        <p>
          Answer: SQL databases are relational, have predefined schemas, and use
          SQL for querying. They are suitable for structured data and complex
          transactions. NoSQL databases are non-relational, schema-less, and
          handle diverse data types. They provide scalability, high
          availability, and fast data retrieval. The choice depends on data
          structure, scalability needs, and transaction complexity.
        </p>
      </div>
      <div className="shadow-xl p-4 my-4">
        <h3 className="text-2xl font-semibold my-4">
          3. What is express js? What is Nest JS ?
        </h3>
        <p>
          Answer: Express.js is a minimalist web application framework for
          Node.js. NestJS is a TypeScript-based web application framework for
          building scalable server-side applications.
        </p>
      </div>
      <div className="shadow-xl p-4 my-4">
        <h3 className="text-2xl font-semibold my-4">4.What is MongoDB aggregate and how does it work? </h3>
        <p>Answer: MongoDB's aggregate function is used for advanced data processing and analysis. It takes an array of stages as input, each representing a specific operation on the data. The stages are processed sequentially, allowing for complex computations, filtering, grouping, sorting, and more. The aggregate function enables powerful data manipulation and analysis, extracting valuable insights from MongoDB collections.</p>
      </div>
    </div>
  );
};

export default Blogs;
