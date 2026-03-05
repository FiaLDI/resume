import Prism from "prismjs";
import { useEffect, useRef } from "react"

const INDENT = "  "

export const CodeForm = ({code, setCode, runCode}: {code: string, runCode: () => void, setCode: (code: string) => void}) => {

    const textareaRef=useRef<HTMLTextAreaElement>(null);
    const preRef=useRef<HTMLPreElement>(null);
    const codeRef=useRef<HTMLElement>(null)

    useEffect(()=>{
        if(codeRef.current){
            Prism.highlightElement(codeRef.current)
        }
    },[code])

    const syncScroll=()=>{
        if(!textareaRef.current || !preRef.current) return

        preRef.current.scrollTop=textareaRef.current.scrollTop
        preRef.current.scrollLeft=textareaRef.current.scrollLeft
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Tab") {
            e.preventDefault()

            const textarea = e.currentTarget

            const start = textarea.selectionStart
            const end = textarea.selectionEnd

            const value = code

            const before = value.substring(0, start)
            const selected = value.substring(start, end)
            const after = value.substring(end)

            if (e.shiftKey) {

    // ---------- NO SELECTION ----------
    if (start === end) {

        const lineStart = value.lastIndexOf("\n", start - 1) + 1
        const line = value.substring(lineStart, start)

        if (line.startsWith(INDENT)) {

            const newCode =
                value.substring(0, lineStart) +
                line.slice(INDENT.length) +
                value.substring(start)

            setCode(newCode)

            requestAnimationFrame(() => {
                textarea.selectionStart =
                textarea.selectionEnd =
                start - INDENT.length
            })
        }

        return
    }

    // ---------- MULTILINE ----------
    const lines = selected.split("\n")

    const updated = lines.map(line =>
        line.startsWith(INDENT)
            ? line.slice(INDENT.length)
            : line.replace(/^\s{1,2}/, "")
    )

    const newSelected = updated.join("\n")

    const newCode = before + newSelected + after

    setCode(newCode)

    requestAnimationFrame(() => {
        textarea.selectionStart = start
        textarea.selectionEnd = end
    })

    return
}

            // ---------- TAB ----------

            if (start === end) {

                const newCode =
                    value.substring(0, start) +
                    INDENT +
                    value.substring(end)

                setCode(newCode)

                requestAnimationFrame(() => {
                    textarea.selectionStart =
                    textarea.selectionEnd =
                    start + INDENT.length
                })

                return
            }

            const lines = selected.split("\n")
            const updated = lines.map(line => INDENT + line)

            const newSelected = updated.join("\n")

            const newCode = before + newSelected + after

            setCode(newCode)

            requestAnimationFrame(() => {

            textarea.selectionStart = start
            textarea.selectionEnd =
                end + lines.length * INDENT.length

            })
        }

        if (e.ctrlKey && e.key === "Enter") {
            runCode()
        }
    }

    return (
        <div className="relative">
            <textarea
                ref={textareaRef}
                value={code}
                spellCheck={false}
                onScroll={syncScroll}
                onKeyDown={handleKeyDown}
                onChange={(e)=>setCode(e.target.value)}
                className=
                    "absolute inset-0 w-full h-full bg-transparent text-transparent caret-white resize-none p-4 outline-none font-mono text-sm leading-6 whitespace-pre [tab-size:2]"
            />

            <pre
                ref={preRef}
                className="p-4 overflow-auto font-mono text-sm leading-6 whitespace-pre [tab-size:2]"
            >
                <code ref={codeRef} className="language-javascript">
                    {code}
                </code>
            </pre>

        </div>
    )
}
