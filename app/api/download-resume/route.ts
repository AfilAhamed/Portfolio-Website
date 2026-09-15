import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'resume.pdf')
  const file = await readFile(filePath)

  return new Response(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Afil Ahamed - Flutter Developer.pdf"; filename*=UTF-8\'\'Afil%20Ahamed%20-%20Flutter%20Developer.pdf',
      'Content-Length': String(file.byteLength),
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
