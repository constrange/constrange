export type AuthorProfile = {
  name: string
  role: string
  avatar: string
}

export const authors = {
  deepak: {
    name: "Deepak Patil",
    role: "Founder",
    avatar: "/about/deepak-patil.jpg",
  },
} satisfies Record<string, AuthorProfile>

export const defaultAuthor = authors.deepak

export function resolveAuthor(author: { name: string; role: string; avatar?: string }): AuthorProfile {
  if (author.name === "Constrange") return defaultAuthor

  const match = Object.values(authors).find((entry) => entry.name === author.name)
  return {
    name: author.name,
    role: author.role,
    avatar: author.avatar ?? match?.avatar ?? defaultAuthor.avatar,
  }
}
