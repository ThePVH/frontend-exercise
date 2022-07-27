import './styles.css'

export const App = () => {
  return (
    <div>
      <h1>
        React TypeScript Webpack - {process.env.NODE_ENV} {process.env.name}
      </h1>
    </div>
  )
}
