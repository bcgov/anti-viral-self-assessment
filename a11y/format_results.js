const fs = require('fs');
const path = require('path');

var args = process.argv.slice(2);
const currentPath = path.resolve(__dirname);

/**
 * Converts json results from pa11y to MD for a github comment
 */
fs.readFile(`${args[0]}`, 'utf8', (err, input) => {
  if (err) {
    console.error(err);
    return;
  }
  const data = JSON.parse(input);
  let output = [];

  const { total, passes, errors } = data;
  const results = Object.entries(data.results);

  output.push('Runs | Passes ✔ | Errors ❌ |');
  output.push('| --: | --: | --: |');
  output.push(`| ${total} | ${passes} | ${errors} |`);
  results.forEach(result => {
    const [url, errors] = [result[0], result[1]];
    if (errors.length > 0) {
      output.push(`1. ❌ ${url}\n`);
      errors.forEach(error => {
        if (error.code) {
          output.push(`    **WCAG Code:** \`${error.code}\`\n`);
          output.push(`    **Context:** \`${error.context}\`\n`);
          output.push(`    **Selector:** \`${error.selector}\`\n`);
        }
        output.push(`    > ${error.message}\n`);
      });
    }
  });

  fs.writeFileSync(`${currentPath}/results/results.md`, output.join('\n'), err => {
    if (err) return console.log(err);
    console.log('Comment Generated Successfully');
  });
});
