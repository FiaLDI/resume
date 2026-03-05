import { Mode } from "@/features/change-mode"
import { ResultType, TestCase } from "../types/run-code.types"
import { useState } from "react"
import { examples } from "./examles.run-code"
import { buildTree } from "@/shared/lib/code-run/tree/buildTree"

export const useRunCode = ({mode, tests}: {mode: Mode, tests: TestCase[]}) => {

    const [code, setCode]=useState(examples.array.code)
    const [consoleOut,setConsoleOut]=useState<string[]>([]);
    const [results,setResults]=useState<ResultType[]>([]);
    const [time,setTime]=useState<number|null>(null);

    
    const parseInput=(input:string)=>{
        switch(mode){

            case "array":
            case "matrix":
            case "json":
            return JSON.parse(input)

            case "string":
            return input

            case "tree":
            return buildTree(JSON.parse(input))

            default:
            return input
        }
    }

    const runCode=()=>{
        const logs:string[]=[]
        const fakeConsole={
            log:(...args:unknown[])=>{
                logs.push(args.map(a=>JSON.stringify(a)).join(" "))
            }
        }

        const start=performance.now()

        try {
            const fn = new Function(
                "input",
                "console",
                `${code}; return run(input)`
            ) as (input: unknown, console: typeof fakeConsole) => unknown

            const res=tests.map(t=>{
                const parsed=parseInput(t.input)
                const out=fn(parsed,fakeConsole)

                return{
                    input:t.input,
                    expected:t.expected,
                    output:JSON.stringify(out),
                    pass:JSON.stringify(out)===t.expected
                }
            })

            const end=performance.now()
            setResults(res)
            setConsoleOut(logs)
            setTime(end - start)

        } catch (e: unknown) {
            const message =
                e instanceof Error ? e.message : String(e)

            setResults([])
            setConsoleOut([message])
            setTime(null)
        }
    }

    const clearState = () => {
        setResults([])
        setConsoleOut([])
        setTime(null)
    }

    return {
        code,
        results, time, consoleOut,
        runCode, clearState, setCode
    }
}
