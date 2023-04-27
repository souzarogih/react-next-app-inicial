import Caixa from "@/components/basicos/Caixa";

export default function PaginaCaixas() {
  return (
    <div className="flex gap-7 p-7">
      <Caixa>Higor</Caixa>
      <Caixa>Jesus</Caixa>
      <Caixa>Iara</Caixa>
      <Caixa>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Caixa>
    </div>
  )
}