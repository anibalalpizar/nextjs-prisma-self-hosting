import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-2xl space-y-8">
       
        <h1 className="text-center text-3xl font-bold">
          {process.env.NEXT_PUBLIC_APP_TITLE}
        </h1>
        <Card className="mx-auto max-w-sm">
          <CardContent className="flex flex-col gap-4">
            <Button asChild>
              <Link href="/todo">Go to Todo List</Link>
            </Button>
            <Button asChild>
              <Link href="/dynamic">Go to Dynamic Page</Link>
            </Button>
            <Button asChild>
              <Link href="/static">Go to Static Page</Link>
            </Button>
            <Button asChild>
              <Link href="/isr">Go to ISR Page</Link>
            </Button>
            <Button asChild>
              <Link href="/streaming">Go to Streaming Page</Link>
            </Button>
            <Button asChild>
              <Link href="/route-handler">Go to Route Handler Page</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
