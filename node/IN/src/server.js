import fs from "fs/promises";
import http from "node:http";
import open from "open";

export const interpolate = (html, data) => {
  // replace every {{notes}} with data.notes
  return html.replace("{{ notes }}", (match, placeholder) => {
    return data.notes || "";
  });
};

export const formatNotes = (notes) => {
  return notes
    .map((note) => {
      return `<div class="note">
    <p>${note.content}</p>
        <div class="tags">
          ${note.tags.map((tag) => `<span class="tag">${tag}</span>`)}
        </div>
    </div>`;
    })
    .join("\n");
};

export const createServer = (notes) => {
  return http.createServer(async (req, res) => {
    var HTML_PATH = new URL("./template.html", import.meta.url).pathname;
    HTML_PATH = HTML_PATH.replace(/%20/g, " ").slice(1);
    const template = await fs.readFile(HTML_PATH, "utf-8");
    const html = interpolate(template, {
      notes: formatNotes(notes),
    });
    fs.writeFile("index.html", html);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  });
};

export const start = (notes, port) => {
  const server = createServer(notes);
  server.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    open(`http://localhost:${port}`);
  });
};
