
const ArrowTopIcon = ({ className, fill = "#001A41" }: { className?: string, fill?: string }) => {
  return (
    <svg width="19" height="11" viewBox="0 0 19 11" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M9.50065 3.61887L2.4623 10.6095C1.93729 11.1302 1.08608 11.1302 0.561075 10.6095C0.0360661 10.0889 0.0360661 9.24482 0.561075 8.7242L8.5499 0.79101C9.07498 0.27031 9.92632 0.270311 10.4514 0.791011L18.4402 8.7242C18.9652 9.24482 18.9652 10.0889 18.4402 10.6095C17.9152 11.1302 17.064 11.1302 16.539 10.6095L9.50065 3.61887Z" fill={fill} />
    </svg>


  )
}

export default ArrowTopIcon;