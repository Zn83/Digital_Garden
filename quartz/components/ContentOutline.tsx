import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import fs from "fs"
import path from "path"

/**
 * 
 *  COMPONENT PERSO
 * 
 * slugify: normalise un titre/segment en slug "friendly" :
 * - lowercase
 * - remove accents
 * - remove punctuation
 * - replace spaces by '-'
 * - collapse multiple '-'
 */
function slugify(s: string) {
  return s
    .normalize("NFKD")                    // sépare les accents
    .replace(/[\u0300-\u036f]/g, "")      // retire les diacritiques
    .toLowerCase()
    .replace(/[^a-z0-9\s-\/]/g, "")       // garde lettres, chiffres, espaces, - et slash (pour chemins)
    .trim()
    .replace(/\s+/g, "-")                 // espaces -> tirets
    .replace(/-+/g, "-")                  // collapse tirets
}

/**
 * normalizePathToContent: construit un path relatif vers content/ en slugifiant
 * chaque segment (ex: "Finance/How to value a company" -> "finance/how-to-value-a-company")
 */
function normalizePathToContent(target: string) {
  const parts = target.split("/").map(p => slugify(p))
  return path.join(...parts)
}

export default (() => {
  function ContentOutline(props: QuartzComponentProps & { target?: string }) {
    // priorité : prop target (usage inline), sinon frontmatter.outlineOf
    const targetRaw = props.target ?? props.fileData?.frontmatter?.outlineOf
    if (!targetRaw) return null

    const normalized = normalizePathToContent(targetRaw) // ex: finance/how-to-value-a-company
    const contentPath = path.join(process.cwd(), "content", `${normalized}.md`)

    if (!fs.existsSync(contentPath)) {
      return <p>⚠️ Note non trouvée : {targetRaw}</p>
    }

    const content = fs.readFileSync(contentPath, "utf-8")
    // récupère les lignes qui sont des titres #, ##, ###
    const lines = content.split("\n").filter(line => /^#{1,3}\s/.test(line))

    return (
      <div class="outline-list">
        <h3>Sommaire : {targetRaw}</h3>
        <ul>
          {lines.map((line, i) => {
            const level = line.match(/^#+/)[0].length
            const title = line.replace(/^#+\s*/, "").trim()
            const anchor = slugify(title) // même slugify pour l'ancre
            const linkPath = "/" + normalized.split(path.sep).join("/") // ex "/finance/how-to-value-a-company"
            return (
              <li class={`level-${level}`} key={`${normalized}-${i}`}>
                <a href={`${linkPath}#${anchor}`}>{title}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return ContentOutline
}) satisfies QuartzComponentConstructor