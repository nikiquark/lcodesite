import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation:{

                },
                navbar:{
                    'about': 'about',
                    'team': 'team',
                    'partnership' : 'partnership',
                    'theory': 'theory',
                    'publications': 'publications'
                },
                partnership:{
                    'partnership': 'Partnership',
                    'description': 'We cooperate with various Russian and foreign teams and are directly involved in experimental work.',
                    'nizhniy': 'nizhny novgorod',   
                },
                team:{
                    'team': 'We are',
                    'lotov': 'Konstantin Lotov',
                    'minakov': 'Vladimir Minakov',
                    'tuev': 'Petr Tuev',
                    'spitsyn': 'Roman Spitsyn',
                    'hudyakov': 'Vadim Hudyakov',
                    'shalimova': 'Irina Shalimova',
                    'yarygova': 'Vlada Yarygova',
                    'okhotnikov': 'Nikita Okhotnikov',
                    'kargapolov': 'Ivan Kargapolov',
                    'dorozhkina': 'Maria Dorozhkina',

                    'lotov_desc': 'Research group leader. The creator of the LCODE program, with the help of which it became possible to simulate wake acceleration in a plasma tens of meters long. Responsible for the theory and numerical simulation of the experiment in the AWAKE project, the development of LCODE, writing scientific papers and coordinating the direction of the work of the team members.',
                    'minakov_desc': 'He studied the influence of a huge number of parameters on the excitation of a wake wave in a plasma by a long beam of protons. Based on this and other work, the optimal conditions for the AWAKE experiment at CERN were chosen. He showed that the motion of plasma ions can be used to increase the efficiency of the wake accelerator by 20-30%.',
                    'tuev_desc': 'He studied the effect of gas jets flowing from the ends of the plasma section in the AWAKE experiment and optimized the parameters of electron beam injection, on the basis of which the so-called "oblique" injection scheme was developed. Participates in the development of the experiment on wake acceleration at the ILP SB RAS. Administers the operation of our Uma computing server.',
                    'spitsyn_desc': 'Developed the LCODE module, capable of numerically calculating the interaction of laser pulses with plasma. He develops the laser direction of wake acceleration, cooperates with the research group of the Institute of Nuclear Physics of the Siberian Branch of the Russian Academy of Sciences, which studies the generation of terahertz radiation during the interaction of wake waves in plasma.',
                    'hudyakov_desc': 'He studies the long-term dynamics of wake waves in plasma. Developed the LCODE module, capable of taking into account collisional processes in plasma, which made it possible to explain a series of results from the FACET experiment at the SLAC research center, USA.',
                    'shalimova_desc': 'Mathematician in the team of physicists. He is engaged in the development of the LCODE 3D solver for fields and particles in plasma. He studies and implements advanced numerical schemes in our code, and also advises us on all issues related to PIC calculations.',
                    'yarygova_desc': "Master's student at NSU. Modeling the basic version of AWAKE Run II.",
                    'okhotnikov_desc': 'I made a website',
                    'kargapolov_desc': 'Developing LCODE 3D.',
                    'dorozhkina_desc': 'Working'
                }
            },
            ru: {
                translation:{
                    
                },
                navbar:{
                    'about': 'главная',
                    'team': 'команда',
                    'partnership' : 'сотрудничество',
                    'theory': 'теория',
                    'publications': 'публикации'
                },
                partnership:{
                    'partnership': 'Сотрудничество',
                    'description': 'Мы сотрудничаем с различными российскими и зарубежными коллективами и принимаем непосредственное участие в ряде экспериментальных работ.',
                    'novosibirsk': 'новосибирск',
                    'novosibirsk_desc': 'Институт Ядерной Физики<br>Институт Лазерной Физики<br>Новосибирский Государственный университет',
                    'irkutsk': 'иркутск',
                    'irkutsk_desc': 'Иркутский суперкомпьютерный центр',
                    'nizhniy': 'нижний новгород',
                    'nizhniy_desc': 'Эксперимент XCELS',
                    'geneva': "женева",
                    'geneva_desc': "ЦЕРН<br>Эксперимент AWAKE",
                    'standford': 'Стэндфорд',
                    'standford_desc': 'SLAC<br/>Эксперимент FACET',
                    'test': 'Тест',
                },
                team:{
                    'team': 'Наш команда:',
                    'lotov': 'Константин Лотов',
                    'minakov': 'Владимир Минаков',
                    'tuev': 'Пётр Туев',
                    'spitsyn': 'Роман Спицын',
                    'hudyakov': 'Вадим Худяков',
                    'shalimova': 'Ирина Шалимова',
                    'yarygova': 'Влада Ярыгова',
                    'okhotnikov': 'Никита Охотников',
                    'kargapolov': 'Иван Каргаполов',
                    'dorozhkina': 'Мария Дорожкина',
                    'supervisor': 'руководитель',
                    'developer': 'программист',
                    'researcher': 'научный сотрудник',

                    'lotov_desc': 'Руководитель исследовательской группы. Создатель программы LCODE, с помощью которой появилась возможность моделировать кильватерное ускорение в плазме длиной в десятки метров. Отвечает за теорию и численное моделирование эксперимента в проекте AWAKE, развитие LCODE, написание научных работ и координирует направление работ участников коллектива.',
                    'minakov_desc': 'Изучил влияние огромного числа параметров на возбуждение кильватерной волны в плазме длинным пучком протонов. На основе этой и других работ были выбраны оптимальные условия для эксперимента AWAKE в ЦЕРН. Показал, что движение ионов плазмы может быть использовано для повышения эффективности кильватерного ускорителя на 20-30%.',
                    'tuev_desc': 'Исследовал влияние струй газа, вытекающих с торцов плазменной секции в эксперименте AWAKE и оптимизировал параметры инжекции электронного пучка, на основе чего была разработана так называемая схема "косой" инжекции. Участвует в развитии эксперимента по кильватерному ускорению в ИЛФ СО РАН. Администрирует работу нашего вычислительного сервера Uma.',
                    'spitsyn_desc': 'Разработал модуль LCODE, способный численно рассчитывать взаимодействие лазерных импульсов с плазмой. Развивает лазерное направление кильватерного ускорения, сотрудничает с исследовательской группой ИЯФ СО РАН, изучающей генерацию терагерцового излучения при взаимодействии кильватерных волн в плазме.',
                    'hudyakov_desc': 'Изучает долговременную динамику кильватерных волн в плазме. Разработал модуль LCODE, способный учитывать столкновительные процессы в плазме, что позволило объяснить серию результатов эксперимента FACET в научном центре SLAC, США.',
                    'shalimova_desc': 'Математик в коллективе физиков. Занимается разработкой решателя LCODE 3D для полей и частиц в плазме. Изучает и внедряет продвинутые численные схемы в наш код, а также консультирует нас по всем вопросам, связанным с PIC расчетами.',
                    'yarygova_desc': 'Студентка магистратуры ФФ НГУ. Занимается моделированием базового варианта AWAKE Run II.',
                    'okhotnikov_desc': 'Сделал сайт',
                    'kargapolov_desc': 'Занимается разработкой LCODE 3D.',
                    'dorozhkina_desc': 'Занимается работой'
                }
            }
        }
    })