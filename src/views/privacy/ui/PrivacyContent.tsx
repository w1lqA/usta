import { Container, Section, Heading, Text } from "@/shared/ui";

export function PrivacyContent() {
  return (
    <Section padding="default" surface="surface">
      <Container>
        <div className="mx-auto flex max-w-[52rem] flex-col gap-12">
          {/* Intro */}
          <Text className="text-neutral-600">
            Настоящая Политика конфиденциальности персональных данных (далее —
            Политика) действует в отношении всей информации, которую
            АНО ДПО УЦ «УСТА» (далее — Оператор) может получить о Пользователе
            во время использования сайта.
          </Text>

          {/* 1. Общие положения */}
          <section className="flex flex-col gap-5">
            <Heading as="h2" level="heading-sm" className="text-dark-900">
              1. Общие положения
            </Heading>
            <Text className="text-neutral-600">
              1.1. Использование сайта означает безоговорочное согласие
              Пользователя с настоящей Политикой и указанными в ней условиями
              обработки его персональных данных.
            </Text>
            <Text className="text-neutral-600">
              1.2. В случае несогласия с условиями Политики Пользователь должен
              прекратить использование сайта.
            </Text>
            <Text className="text-neutral-600">
              1.3. Настоящая Политика применяется только к данному сайту.
              Оператор не контролирует и не несёт ответственности за сайты
              третьих лиц, на которые Пользователь может перейти по ссылкам,
              доступным на сайте.
            </Text>
          </section>

          {/* 2. Какие данные собираем */}
          <section className="flex flex-col gap-5">
            <Heading as="h2" level="heading-sm" className="text-dark-900">
              2. Персональные данные, которые обрабатывает Оператор
            </Heading>
            <Text className="text-neutral-600">
              2.1. В рамках настоящей Политики под персональными данными
              Пользователя понимаются:
            </Text>
            <ul className="flex flex-col gap-3 pl-5">
              <li className="text-base leading-relaxed text-neutral-600">
                · Фамилия, имя, отчество;
              </li>
              <li className="text-base leading-relaxed text-neutral-600">
                · Контактный телефон;
              </li>
              <li className="text-base leading-relaxed text-neutral-600">
                · Адрес электронной почты;
              </li>
              <li className="text-base leading-relaxed text-neutral-600">
                · Иные данные, которые Пользователь добровольно предоставляет
                через форму обратной связи.
              </li>
            </ul>
            <Text className="text-neutral-600">
              2.2. Сайт не собирает и не обрабатывает данные, позволяющие
              напрямую идентифицировать личность, за исключением случаев, когда
              такие данные предоставлены Пользователем добровольно.
            </Text>
          </section>

          {/* 3. Цели обработки */}
          <section className="flex flex-col gap-5">
            <Heading as="h2" level="heading-sm" className="text-dark-900">
              3. Цели обработки персональных данных
            </Heading>
            <Text className="text-neutral-600">
              3.1. Оператор обрабатывает персональные данные Пользователя
              в следующих целях:
            </Text>
            <ul className="flex flex-col gap-3 pl-5">
              <li className="text-base leading-relaxed text-neutral-600">
                · Обработка заявок и обращений Пользователя;
              </li>
              <li className="text-base leading-relaxed text-neutral-600">
                · Консультирование по вопросам обучения, стоимости и сроков;
              </li>
              <li className="text-base leading-relaxed text-neutral-600">
                · Информирование о программах обучения, акциях и новостях
                учебного центра (при наличии согласия);
              </li>
              <li className="text-base leading-relaxed text-neutral-600">
                · Оформление договоров и документов об обучении.
              </li>
            </ul>
          </section>

          {/* 4. Правовые основания */}
          <section className="flex flex-col gap-5">
            <Heading as="h2" level="heading-sm" className="text-dark-900">
              4. Правовые основания обработки
            </Heading>
            <Text className="text-neutral-600">
              4.1. Правовым основанием обработки персональных данных являются:
              Федеральный закон от 27.07.2006 № 152-ФЗ «О персональных данных»,
              согласие субъекта персональных данных на обработку его
              персональных данных.
            </Text>
            <Text className="text-neutral-600">
              4.2. Согласие на обработку персональных данных предоставляется
              Пользователем путём отметки соответствующего чекбокса при
              заполнении формы обратной связи на сайте.
            </Text>
          </section>

          {/* 5. Порядок и условия */}
          <section className="flex flex-col gap-5">
            <Heading as="h2" level="heading-sm" className="text-dark-900">
              5. Порядок и условия обработки персональных данных
            </Heading>
            <Text className="text-neutral-600">
              5.1. Обработка персональных данных осуществляется с согласия
              субъекта персональных данных на обработку его персональных данных.
            </Text>
            <Text className="text-neutral-600">
              5.2. Оператор принимает необходимые организационные и технические
              меры для защиты персональной информации Пользователя от
              неправомерного или случайного доступа, уничтожения, изменения,
              блокирования, копирования, распространения, а также от иных
              неправомерных действий третьих лиц.
            </Text>
            <Text className="text-neutral-600">
              5.3. Персональные данные Пользователя могут быть переданы
              уполномоченным органам государственной власти Российской
              Федерации только по основаниям и в порядке, установленным
              законодательством Российской Федерации.
            </Text>
            <Text className="text-neutral-600">
              5.4. Оператор не несёт ответственности за действия третьих лиц,
              получивших доступ к персональным данным Пользователя в результате
              противоправных действий.
            </Text>
          </section>

          {/* 6. Права субъекта */}
          <section className="flex flex-col gap-5">
            <Heading as="h2" level="heading-sm" className="text-dark-900">
              6. Права субъекта персональных данных
            </Heading>
            <Text className="text-neutral-600">
              6.1. Пользователь имеет право:
            </Text>
            <ul className="flex flex-col gap-3 pl-5">
              <li className="text-base leading-relaxed text-neutral-600">
                · Получать информацию, касающуюся обработки его персональных
                данных;
              </li>
              <li className="text-base leading-relaxed text-neutral-600">
                · Требовать уточнения, блокирования или уничтожения своих
                персональных данных в случае, если они являются неполными,
                устаревшими, неточными, незаконно полученными или не являются
                необходимыми для заявленной цели обработки;
              </li>
              <li className="text-base leading-relaxed text-neutral-600">
                · Отозвать согласие на обработку персональных данных, направив
                соответствующий запрос Оператору;
              </li>
              <li className="text-base leading-relaxed text-neutral-600">
                · Обжаловать действия или бездействие Оператора в
                уполномоченный орган по защите прав субъектов персональных
                данных или в судебном порядке.
              </li>
            </ul>
          </section>

          {/* 7. Контакты */}
          <section className="flex flex-col gap-5">
            <Heading as="h2" level="heading-sm" className="text-dark-900">
              7. Контактные данные Оператора
            </Heading>
            <Text className="text-neutral-600">
              По всем вопросам, связанным с обработкой персональных данных,
              Пользователь может обратиться к Оператору:
            </Text>
            <div className="flex flex-col gap-3 rounded-2xl bg-neutral-100 p-6">
              <p className="text-sm font-semibold text-neutral-900">
                АНО ДПО УЦ «УСТА»
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                Юридический адрес: Российская Федерация, Чеченская республика,
                г. о. Город Грозный, р-н Ахматовский, ул. Моздокская, д. 13, кв. 3
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                Email:{" "}
                <a
                  href="mailto:info@usta.com.ru"
                  className="font-semibold text-brand-primary transition-colors hover:text-brand-accent"
                >
                  info@usta.com.ru
                </a>
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                Телефон:{" "}
                <a
                  href="tel:+79998707405"
                  className="font-semibold text-brand-primary transition-colors hover:text-brand-accent"
                >
                  +7 (999) 870-74-05
                </a>
              </p>
            </div>
          </section>

          {/* Footer note */}
          <p className="border-t border-border pt-8 text-caption text-neutral-400">
            Дата последнего обновления:{" "}
            {new Date().toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </Container>
    </Section>
  );
}