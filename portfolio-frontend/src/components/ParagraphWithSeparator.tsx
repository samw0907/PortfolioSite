import React from 'react'

interface ParagraphWithSeparatorProps {
  children: React.ReactNode
  isLast?: boolean
}

const ParagraphWithSeparator: React.FC<ParagraphWithSeparatorProps> = ({ children, isLast = false }) => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* Paragraph content */}
      <div className="w-full">{children}</div>

      {/* Teal tapered line separator except after last paragraph */}
      {!isLast && (
        <div
          className="w-1/3 h-[2px] my-10 rounded"
          style={{
            backgroundImage: 'linear-gradient(to right, transparent, #14b8a6, transparent)',
          }}
        />
      )}
    </div>
  )
}

export default ParagraphWithSeparator
