// const { introspectionQuery, buildClientSchema, getIntrospectionQuery } = require("graphql");
const exec = require('child_process').exec;

const args = "-o schema.json https://graphiql.medplum.com/schema/schema-v1.json";

exec(`curl ${args}`, (error, stdout, stderr) => {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});

// const fs = require('fs');
// const path = require('path');
// const fetch = require('node-fetch');
// const {
//   buildClientSchema,
//   getIntrospectionQuery,
//   printSchema,
// } = require('graphql/utilities');
// const data = require('./schema.json')

// fetch('https://graphiql.medplum.com/schema/schema-v1.json', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query: getIntrospectionQuery(),
//   }),
// })
//   .then(res => res.json())
// console.log(data.data.__schema)
  // printSchema(buildClientSchema(JSON.stringify(data)))
  // .then(clientSchema =>
  //   fs.writeFileSync(
  //     'schema.graphql',
  //     clientSchema,
  //   ),
  // );
  // buildClientSchema(JSON.stringify(data))
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err))