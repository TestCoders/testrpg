import {Progress} from "@/components/ui/progress";
import {Label} from "@/components/ui/label";

export function ProgressBar(props: {value: number, total: number, label: string}) {
    return (
        <div className={"space-y-0.5 w-full"} data-character-stats={props.label}>
            <Label className={"text-sm text-muted-foreground"}>{props.label}</Label>
            <div className={"flex items-center space-x-2"}>
                <Progress value={(props.value / props.total) * 100} className={"bg-blue-50 rounded-sm"}/>
                <span className={"text-sm text-muted-foreground"}>{props.value}</span>
            </div>
        </div>
    )
}