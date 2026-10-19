import { Guid } from "guid-typescript"

export class Movie {
    id: string = Guid.create().toString()
    title: string = ""
    year: number | null = null
    watched: boolean = false
    rating: number | null = null
    imgUrl: string = ""
}
