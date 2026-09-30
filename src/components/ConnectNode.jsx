import { useProximityNode } from '../lib/field'

export default function ConnectNode({
  as: Tag = 'div',
  radius = 130,
  strength = 8,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const ref = useProximityNode({ radius, strength })
  return (
    <Tag
      ref={ref}
      data-node
      className={`connect-node ${className}`}
      style={{ '--intensity': 0, position: 'relative', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
