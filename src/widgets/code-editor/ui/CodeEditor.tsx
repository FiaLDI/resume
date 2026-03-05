"use client"

import { ChangeMode, useChangeMode } from "@/features/change-mode"
import { CodeForm, examples } from "@/features/run-code"
import { useRunCode } from "@/features/run-code/model/useRunCode"
import { ExecutionResultCase, ExecutionResultConsole } from "@/entities/execution-result"
import { EditTestForm, useEditTests } from "@/features/edit-tests"

const MIN_LINES = 20;

export const CodeRunner = () => {
    const { mode, changeMode } = useChangeMode();
    const { tests, setTests } = useEditTests();

    const { 
        code, 
        results, 
        consoleOut, 
        time, 
        runCode, 
        clearState, 
        setCode 
    } = useRunCode({
        mode, tests
    });

    const lineCount = Math.max(
        code.split("\n").length,
        MIN_LINES
    )

    return(
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
            <div className="flex gap-6">
                <div className="">
                     <ChangeMode
                        mode={mode}
                        changeMode={changeMode}
                        callback={(m)=>{
                            setCode(examples[m].code)
                            setTests(examples[m].testCases)
                            clearState()
                        }}
                    />
                    <div className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
                        <div className="px-4 py-2 border-b border-zinc-700 text-sm text-zinc-300">
                            Editor (Ctrl+Enter to run)
                        </div>
                        <div className="grid grid-cols-[40px_1fr] font-mono text-sm relative">
                            <div className="bg-zinc-950 text-zinc-500 text-right pr-2 pt-4 select-none leading-6 text-sm">
                                {Array.from({ length: lineCount }, (_, i) => (
                                    <div key={i} className="h-6">
                                    {i + 1}
                                    </div>
                                ))}
                            </div>
                            <CodeForm code={code} runCode={runCode} setCode={setCode} />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
                        <div className="px-4 py-2 border-b border-zinc-700 text-sm text-zinc-300">
                            Test cases
                        </div>
                        <div className="p-4 flex flex-col gap-3">
                            {tests.map((t,i)=>(
                                <EditTestForm key={i} t={t} tests={tests} setTests={setTests} i={i} />
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={runCode}
                        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded w-fit"
                    >
                            Run Tests
                    </button>
                    <div className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
                        <div className="px-4 py-2 border-b border-zinc-700 text-sm text-zinc-300">
                            Results
                        </div>
                        <div className="p-4 text-sm font-mono">
                            {results.map((r,i)=><ExecutionResultCase key={i} r={r} i={i} />)}
                        </div>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
                        <div className="px-4 py-2 border-b border-zinc-700 text-sm text-zinc-300">
                            Console
                        </div>
                        <pre className="p-4 bg-zinc-950 text-zinc-200 text-sm font-mono min-h-20">
                            {consoleOut.map((l,i)=><ExecutionResultConsole key={i} l={l} />)}
                        </pre>
                    </div>
                    {time!==null &&(
                        <div className="text-xs text-zinc-400">
                            Execution time: {time.toFixed(3)} ms
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
