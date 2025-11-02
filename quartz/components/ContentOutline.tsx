import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import fs from "fs"
import path from "path"

export default (() => {
  function ContentOutline({ fileData }: QuartzComponentProps) {
    const targetFile = fileData.frontmatter?.outlineOf
    if (!targetFile) return null

    // On construit un chemin absolu vers le fichier cible
    const contentPath = path.join(process.cwd(), "content", `${targetFile}.md`)
    if (!fs.existsSync(contentPath)) {
      return <p>⚠️ Note non trouvée : {targetFile}</p>
    }

    const content = fs.readFileSync(contentPath, "utf-8")
    const lines = content.split("\n").filter(line => /^#{1,2}\s/.test(line))

    return (
      <div class="outline-list">
        <h3>{targetFile}</h3>
        <ul>
          {lines.map((line, i) => {
            const level = line.match(/^#+/)[0].length
            const title = line.replace(/^#+\s*/, "")
            const anchor = title
              .toLowerCase()
              .replace(/[^\w\s-]/g, "") // enlève caractères spéciaux
              .trim()
              .replace(/\s+/g, "-")
            return (
              <li class={`level-${level}`} key={i}>
                <a href={`/${targetFile}#${anchor}`}>{title}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return ContentOutline
}) satisfies QuartzComponentConstructor