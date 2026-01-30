import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export function Certificate() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="min-h-[250px] flex flex-col justify-between">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <div className="w-24 h-24 bg-white shadow-sm ring-1 ring-border rounded-full flex items-center justify-center shrink-0">
                        <Image src="/logo/IBM_logo.svg" alt="IBM Logo" width={64} height={64} />
                    </div>
                    <div>
                        <CardTitle className="text-xl">IBM Data Science Professional Certificate</CardTitle>
                        <CardDescription className="text-lg">IBM</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Developed and honed hands-on skills in Data Science and Machine Learning. Started with an orientation of Data Science and its Methodology, became familiar and used a variety of data science tools, learned Python and SQL, performed Data Visualization and Analysis, and created Machine Learning models</p>
                </CardContent>
                <CardFooter className="flex justify-between mt-auto">
                    <p className="text-sm text-muted-foreground">Issued: Jan 2026</p>
                    <Button size="sm" asChild>
                        <Link href="https://www.coursera.org/account/accomplishments/professional-cert/4VDR0GAWF6XF">View Credential</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}