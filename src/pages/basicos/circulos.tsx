import Circulo from "@/components/basicos/Circulos";

export default function PaginaCirculos() {
  return (
    <div className="flex justify-around h-screen items-center">
      <Circulo texto="Circ #1"></Circulo>
      <Circulo texto="Circ #2"></Circulo>
      <Circulo texto="Circ #3"></Circulo>
      <Circulo texto="Higuinho" quasePerfeito></Circulo>
    </div>
  )
}