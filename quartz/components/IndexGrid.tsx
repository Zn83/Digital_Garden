import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const FinanceGrid: QuartzComponentConstructor = () => {

    function formatFolderName(folder: string) {
    return folder
        .replace(/^\d+[- ]*/, "")   // enlève "01 -"
        .replace(/-/g, " ")         // remplace --- par espaces
    }

    
    const order = [
      
    "Core Principles",
    "Financial Metrics",
    "Financial Models",
    "Asset Classes",
    "Applications",
    "Case Studies",
    
    ]

    const icons: Record<string, string> = {
    "Core Principles": "🧠",
    "Financial Metrics": "📊",
    "Financial Models": "📐",
    "Asset Classes": "📦",
    "Applications": "⚙️",
    "Case Studies": "📘",
    }
  return ({ allFiles }: QuartzComponentProps) => {

    const financePages = allFiles.filter((file) =>
      file.slug?.startsWith("Finance/")
    )

    const groups: Record<string, typeof allFiles> = {}

    for (const file of financePages) {
      const parts = file.slug?.split("/") ?? []
      const rawFolder = parts[1]
      const folder = formatFolderName(rawFolder)

      if (file.slug?.endsWith("index")) continue
    
      if (!folder) continue

      if (!groups[folder]) {
        groups[folder] = []
      }

      groups[folder].push(file)
    }

    
    

    return (
      <div>
        {Object.entries(groups)
            .sort(([a], [b]) => order.indexOf(a) - order.indexOf(b))
            .map(([folder, files]) => (
          <div class="card-section" key={folder}>
            <h2>{icons[folder]} {folder}</h2>

            <div class="card-grid">
              {files.map((file) => (
                <a href={`/${file.slug}`} class="card">
                  <div class="card-header">
                    <span class="card-icon">📄</span>
                    <span class="card-title">
                      {file.frontmatter?.title ?? file.slug}
                    </span>
                  </div>

                  {file.frontmatter?.description && (
                    <div class="card-desc">
                      {file.frontmatter.description}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default FinanceGrid