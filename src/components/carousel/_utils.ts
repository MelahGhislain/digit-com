import React, { ReactNode } from "react";
import { JsxElement } from "typescript";

export interface ICarousel {
    children: React.ReactNode
    gap?: string
}
export interface WrapCarouselItemProp {
    children: React.ReactNode
    itemWidth?: string
    itemHeight?: string
}