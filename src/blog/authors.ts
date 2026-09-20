export type AuthorProfile = {
  name: string
  role: string
  avatar: string
}

export const authors = {
  constrange: {
    name: "Constrange",
    role: "Practice",
    avatar: "/authors/constrange.svg",
  },
} satisfies Record<string, AuthorProfile>

export const defaultAuthor = authors.constrange

export function resolveAuthor(author: { name: string; role: string; avatar?: string }): AuthorProfile {
  const match = Object.values(authors).find((entry) => entry.name === author.name)
  return {
    name: author.name,
    role: author.role,
    avatar: author.avatar ?? match?.avatar ?? defaultAuthor.avatar,
  }
}
