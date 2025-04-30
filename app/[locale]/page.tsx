'use client';
import { getStates,toStamentWithState } from '../lib/action';
import {useTranslations} from 'next-intl';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {z} from 'zod';

export default function Home() {

  const  formSchema = z.object({
    year: z
      .string({required_error: "Year is required",
        }).refine((val) => {
        const year = parseInt(val);
        return year >= 1921 && year <= 2043;
      }, {
        message: "Year must be between 1921 and 2043",
      }),
    // .min(1921, { message: "Year must be greater than 1921" })
    // .max(2043, { message: "Year must be less than 2043" }),
      
    month: z.string({
      required_error: "Month is required",
      invalid_type_error: "Month must be a number",
    }),
    day: z.string(
      {required_error: "Day is required",
        invalid_type_error: "Day must be a number",}
    ),
    hour: z.string(
      {required_error: "Hour is required",
        invalid_type_error: "Hour must be a number",}),
    gender: z.enum(
      ['male','female'],
    )
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      year: '',
      month: '',
      day: '',
      hour: '',
      gender:'male'
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    toStamentWithState(formData)
    // console.log(values)
  }

  const t = useTranslations('Index');
  const hours = ['子时 (23:00-01:00)', '丑时 (01:00-03:00)', '寅时 (03:00-05:00)', 
    '卯时 (05:00-07:00)', '辰时 (07:00-09:00)', '巳时 (09:00-11:00)', 
    '午时 (11:00-13:00)', '未时 (13:00-15:00)', '申时 (15:00-17:00)', 
    '酉时 (17:00-19:00)', '戌时 (19:00-21:00)', '亥时 (21:00-23:00)']
  return (
    <main className="flex flex-col justify-center mb-4 bg-right-top bg-no-repeat" style={{backgroundImage: "url('/taiji.png')"}}>
      
      <div className="bg-gradient-to-r from-orange-600/20 via-orange-600 to-orange-600/20 h-12 flex justify-center items-center opacity-80">
        <p className="text-white text-xl px-6 ">{t('note')}</p>
      </div>
      <div className="flex justify-center mt-8">
        <h2 className="text-2xl font-medium font-mono px-6">{t('title')}</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col px-4 md:px-8">
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('yearL')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('yearH')}
                    type="number"
                    {...field}
                    className="h-12 bg-white rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="month"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('monthL')}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className='h-12 bg-white rounded-md'>
                      <SelectValue placeholder={t('monthH')}/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {Array.from({length: 12}, (_, i) => i + 1).map(month => (
                        <SelectItem key={month} value={month.toString()}>{month}月</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="day"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('dayL')}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className='h-12 bg-white rounded-md'>
                      <SelectValue placeholder= {t('dayH')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {Array.from({length: 30}, (_, i) => i + 1).map(day => (
                        <SelectItem key={day} value={day.toString()}>{day}日</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hour"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('hourL')}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className='h-12 bg-white rounded-md'>
                      <SelectValue placeholder={t('hourH')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {hours.map((hour, index) => (
                        <SelectItem key={index} value={(index + 1).toString()}>
                          {hour}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="mt-4">
              <FormLabel>{t('genderL')}</FormLabel>
              <FormControl>
                <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                defaultValue="male"
                className="flex gap-4"
                >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">{t('male')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="femaile" />
                  <Label htmlFor="femaile">{t('female')}</Label>
                </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
              </FormItem>
            )}
            />
          <Button type="submit" className="mt-8 bg-orange-500 h-12 text-white text-xl hover:bg-orange-600 hover:cursor-pointer active:bg-orange-700 rounded ">
            {t('submit')}
          </Button>
        </form>
      </Form>
      <p className=" mt-8 text-sm text-gray-500 px-4 md:px-8">
        {t('tip')}
      </p>
    </main>
  );
}
