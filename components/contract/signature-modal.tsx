"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eraser, PenTool, Type, CheckCircle2 } from "lucide-react"

interface SignatureModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (signature: string) => void
  partyName: string
}

export function SignatureModal({ isOpen, onClose, onConfirm, partyName }: SignatureModalProps) {
  const [signatureType, setSignatureType] = React.useState<"draw" | "type">("draw")
  const [typedName, setTypedName] = React.useState(partyName)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = React.useState(false)

  React.useEffect(() => {
    if (isOpen && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.strokeStyle = "#000"
        ctx.lineWidth = 2
        ctx.lineCap = "round"
      }
    }
  }, [isOpen])

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true)
    draw(e)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    const ctx = canvasRef.current?.getContext("2d")
    ctx?.beginPath()
  }

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    let x, y
    if ("touches" in e) {
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.clientX - rect.left
      y = e.clientY - rect.top
    }

    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  const handleConfirm = () => {
    if (signatureType === "type") {
      onConfirm(typedName)
    } else {
      const canvas = canvasRef.current
      if (canvas) {
        onConfirm(canvas.toDataURL())
      }
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Sign Contract</DialogTitle>
          <DialogDescription>
            Please provide your signature to finalize the document.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <Tabs value={signatureType} onValueChange={(v) => setSignatureType(v as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="draw" className="flex items-center gap-2">
                <PenTool className="w-4 h-4" /> Draw
              </TabsTrigger>
              <TabsTrigger value="type" className="flex items-center gap-2">
                <Type className="w-4 h-4" /> Type
              </TabsTrigger>
            </TabsList>

            <TabsContent value="draw" className="space-y-4">
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden h-[200px]">
                <canvas
                  ref={canvasRef}
                  width={450}
                  height={200}
                  className="w-full h-full cursor-crosshair touch-none"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute bottom-2 right-2 text-slate-500 hover:text-red-500"
                  onClick={clearCanvas}
                >
                  <Eraser className="w-4 h-4 mr-1" /> Clear
                </Button>
              </div>
              <p className="text-[11px] text-slate-500 text-center italic">
                Use your mouse or touch screen to draw your signature above.
              </p>
            </TabsContent>

            <TabsContent value="type" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="typed-name">Full Legal Name</Label>
                <Input
                  id="typed-name"
                  value={typedName}
                  onChange={(e) => setTypedName(e.target.value)}
                  placeholder="Enter your full name"
                  className="text-lg font-serif italic"
                />
              </div>
              <div className="p-8 border rounded-lg bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center min-h-[120px]">
                <span className="text-3xl font-serif italic border-b border-slate-900 dark:border-white px-4">
                  {typedName || partyName}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 text-center italic">
                By typing your name, you agree that this constitutes a legal signature.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} className="gap-2">
            <CheckCircle2 className="w-4 h-4" /> Confirm Signature
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
