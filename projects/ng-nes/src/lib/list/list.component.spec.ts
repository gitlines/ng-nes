import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent, ListComponentProps } from './list.component';
import { getSingleNativeElement } from '../../test-helpers';

describe('ListComponent', () => {
  let testSubject: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    });

    fixture = TestBed.createComponent(ListComponent);
    testSubject = fixture.componentInstance;

    testSubject.props = {} as ListComponentProps;
  }));

  describe('render', () => {

    it('creates a ul with class ".nes-list"', () => {
      // Given
      const expectedTagName = 'UL';

      // When
      fixture.detectChanges();

      // Then
      const list = getSingleNativeElement(fixture, '.nes-list');
      expect(list).toBeTruthy();
      expect(list.tagName).toEqual(expectedTagName);
    });

    it('adds inline style on the ul', () => {
      // Given
      const expectedStyle = 'blue';
      testSubject.props.style = {background: expectedStyle};

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-list').style.background).toEqual(expectedStyle);
    });

    it('sets additional classes on the div', () => {
      // Given
      testSubject.props.solid = true;

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-list').classList).toContain('is-disc');
    });
  });

  describe('classList()', () => {

    it('object has "is-circle" set to true if props.solid is false', () => {
      // Given
      testSubject.props.solid = false;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-circle']).toEqual(true);
    });

    it('object has "is-disc" set to true if props.solid is true', () => {
      // Given
      testSubject.props.solid = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-disc']).toEqual(true);
    });
  });
});
