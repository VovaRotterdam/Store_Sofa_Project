import React from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <div>
            <h3 className="text-3xl text-muted-foreground">Home Page</h3>
            <Button variant="outline" size="lg" className="capitalize m-8">
                click me
            </Button>
        </div>
    );
}
